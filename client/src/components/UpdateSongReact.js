import React, { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { MdSystemUpdateAlt } from "react-icons/md"

const UpdateSongReact = ({song}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newSongTitle, setNewSongTitle] = useState(song.songTitle);
  const [newArtist, setNewArtist] = useState(song.artist);
  const [newAlbum, setNewAlbum] = useState(song.album);

  const updateSong = (id) => {

    Axios.put('http://localhost:3001/update', {
      id: id,
      newSongTitle: newSongTitle,
      newArtist: newArtist,
      newAlbum: newAlbum,
    })
    // window.location.reload()
    console.log(id, newSongTitle, newArtist, newAlbum)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <MdSystemUpdateAlt />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newSongTitle">
              <Form.Label>New Song Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="New song title..."
                // id="newSongTitle"
                value={newSongTitle}
                onChange={(e) => setNewSongTitle(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="newArtist">
              <Form.Label>New Artist</Form.Label>
              <Form.Control
                type="text"
                placeholder="New Artist..."
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newAlbum">
              <Form.Label>New Album</Form.Label>
              <Form.Control
                type="text"
                placeholder="New Album..."
                value={newAlbum}
                onChange={(e) => setNewAlbum(e.target.value)}
              />
            </Form.Group>
            <Button
              className='btn w-100'
              variant="secondary"
              onClick={(e) => {
                e.preventDefault()
                handleClose()
                updateSong(song._id)
              }}
               type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UpdateSongReact
