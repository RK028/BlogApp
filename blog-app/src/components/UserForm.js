// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api';

const UserForm = ({ selectedUser, clearSelection }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    if (selectedUser) {
      await updateUser(selectedUser._id, user);
    } else {
      await createUser(user);
    }
    clearSelection();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{selectedUser ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default UserForm;
