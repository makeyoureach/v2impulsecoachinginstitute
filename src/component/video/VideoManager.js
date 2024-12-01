import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { fetchVideoGroups, addVideoGroup, updateVideoGroup, deleteVideoGroup, addVideoToGroup, updateVideo, deleteVideo } from '../restapi/Api';
import { Reveal } from 'react-awesome-reveal';

const VideoManager = () => {
  const [videoGroups, setVideoGroups] = useState([]);
  const [groupDialog, setGroupDialog] = useState({ open: false, groupIndex: null, title: '' });
  const [videoDialog, setVideoDialog] = useState({ open: false, groupIndex: null, videoIndex: null, video: { title: '', url: '' } });
  const [deletedItems, setDeletedItems] = useState([]);

  // Fetch Video Groups from API
  useEffect(() => {
    const loadVideoGroups = async () => {
      const response = await fetchVideoGroups();
      setVideoGroups(response.data);
    };
    loadVideoGroups();
  }, []);

  // Handle Add/Edit Group
  const handleGroupDialogOpen = (groupIndex = null) => {
    if (groupIndex !== null) {
      const group = videoGroups[groupIndex];
      setGroupDialog({ open: true, groupIndex, title: group.title });
    } else {
      setGroupDialog({ open: true, groupIndex: null, title: '' });
    }
  };

  const handleGroupDialogClose = async () => {
    if (groupDialog.groupIndex === null) {
      const newGroup = { title: groupDialog.title, videos: [] };
      await addVideoGroup(newGroup);
      setVideoGroups([...videoGroups, newGroup]);
    } else {
      const updatedGroup = { ...videoGroups[groupDialog.groupIndex], title: groupDialog.title };
      await updateVideoGroup(videoGroups[groupDialog.groupIndex].id, updatedGroup);
      const updatedGroups = [...videoGroups];
      updatedGroups[groupDialog.groupIndex] = updatedGroup;
      setVideoGroups(updatedGroups);
    }
    setGroupDialog({ ...groupDialog, open: false });
  };

  const handleGroupTitleChange = (e) => {
    setGroupDialog({ ...groupDialog, title: e.target.value });
  };

  // Handle Add/Edit Video
  const handleVideoDialogOpen = (groupIndex, videoIndex = null) => {
    if (videoIndex !== null) {
      const video = videoGroups[groupIndex].videos[videoIndex];
      setVideoDialog({ open: true, groupIndex, videoIndex, video: { title: video.title, url: video.url } });
    } else {
      setVideoDialog({ open: true, groupIndex, videoIndex: null, video: { title: '', url: '' } });
    }
  };

  const handleVideoDialogClose = async () => {
    const { groupIndex, videoIndex, video } = videoDialog;
    const updatedGroups = [...videoGroups];

    if (videoIndex === null) {
      // Adding new video
      const response = await addVideoToGroup(updatedGroups[groupIndex].id, video);
      updatedGroups[groupIndex].videos.push({ ...video, id: response.data.id }); // Ensure ID is added here
    } else {
      // Editing existing video
      await updateVideo(updatedGroups[groupIndex].id, updatedGroups[groupIndex].videos[videoIndex].id, video);
      updatedGroups[groupIndex].videos[videoIndex] = { ...video };
    }

    setVideoGroups(updatedGroups);
    setVideoDialog({ ...videoDialog, open: false });
  };

  const handleVideoChange = (e) => {
    setVideoDialog({ ...videoDialog, video: { ...videoDialog.video, [e.target.name]: e.target.value } });
  };

  // Handle Delete Group and Video
  const handleDeleteGroup = async (groupIndex) => {
    const deletedGroup = videoGroups[groupIndex];
    await deleteVideoGroup(deletedGroup.id);
    const updatedGroups = videoGroups.filter((_, index) => index !== groupIndex);
    setVideoGroups(updatedGroups);
    setDeletedItems([...deletedItems, { type: 'group', item: deletedGroup }]);
  };

  const handleDeleteVideo = async (groupIndex, videoIndex) => {
    const videoId = videoGroups[groupIndex].videos[videoIndex].id;
    await deleteVideo(videoGroups[groupIndex].id, videoId);
    
    const updatedGroups = [...videoGroups];
    const [deletedVideo] = updatedGroups[groupIndex].videos.splice(videoIndex, 1);
    setVideoGroups(updatedGroups);
    setDeletedItems([...deletedItems, { type: 'video', item: deletedVideo, groupIndex }]);
  };

  // Handle Undo
  const handleUndo = async () => {
    const lastDeleted = deletedItems.pop();
    if (lastDeleted) {
      if (lastDeleted.type === 'group') {
        const response = await addVideoGroup(lastDeleted.item);
        setVideoGroups([...videoGroups, { ...lastDeleted.item, id: response.data.id }]);
      } else if (lastDeleted.type === 'video') {
        const { groupIndex, item } = lastDeleted;
        const response = await addVideoToGroup(videoGroups[groupIndex].id, item);
        const updatedGroups = [...videoGroups];
        updatedGroups[groupIndex].videos.push({ ...item, id: response.data.id });
        setVideoGroups(updatedGroups);
      }
      setDeletedItems([...deletedItems]);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Video Manager
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleGroupDialogOpen()}>
        Add Video Group
      </Button>
      <Button variant="outlined" onClick={handleUndo} disabled={deletedItems.length === 0}>
        Undo
      </Button>

      <List>
        {videoGroups.map((group, groupIndex) => (
          <Reveal key={groupIndex}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{group.title}</Typography>
                <Button onClick={() => handleGroupDialogOpen(groupIndex)} startIcon={<EditIcon />}>Edit</Button>
                <Button onClick={() => handleDeleteGroup(groupIndex)} startIcon={<DeleteIcon />}>Delete</Button>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {group.videos.map((video, videoIndex) => (
                    <ListItem key={videoIndex}>
                      <ListItemText primary={video.title} secondary={video.url} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => handleVideoDialogOpen(groupIndex, videoIndex)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" onClick={() => handleDeleteVideo(groupIndex, videoIndex)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                  <Button onClick={() => handleVideoDialogOpen(groupIndex)} startIcon={<AddIcon />}>
                    Add Video
                  </Button>
                </List>
              </AccordionDetails>
            </Accordion>
          </Reveal>
        ))}
      </List>

      {/* Group Dialog */}
      <Dialog open={groupDialog.open} onClose={() => setGroupDialog({ ...groupDialog, open: false })}>
        <DialogTitle>{groupDialog.groupIndex === null ? 'Add Video Group' : 'Edit Video Group'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Group Title"
            fullWidth
            value={groupDialog.title}
            onChange={handleGroupTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGroupDialog({ ...groupDialog, open: false })}>Cancel</Button>
          <Button onClick={handleGroupDialogClose}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Video Dialog */}
      <Dialog open={videoDialog.open} onClose={() => setVideoDialog({ ...videoDialog, open: false })}>
        <DialogTitle>{videoDialog.videoIndex === null ? 'Add Video' : 'Edit Video'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Video Title"
            name="title"
            fullWidth
            value={videoDialog.video.title}
            onChange={handleVideoChange}
          />
          <TextField
            margin="dense"
            label="Video URL"
            name="url"
            fullWidth
            value={videoDialog.video.url}
            onChange={handleVideoChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVideoDialog({ ...videoDialog, open: false })}>Cancel</Button>
          <Button onClick={handleVideoDialogClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideoManager;
