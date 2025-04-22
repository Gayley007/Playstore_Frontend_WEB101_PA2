import App from '../models/App.js';

export const getAllApps = async (_req, res) => {
  try {
    const apps = await App.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching apps', error });
  }
};

export const createApp = async (req, res) => {
  try {
    const newApp = new App(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(400).json({ message: 'Error creating app', error });
  }
};

export const updateApp = async (req, res) => {
  try {
    const updatedApp = await App.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedApp);
  } catch (error) {
    res.status(400).json({ message: 'Error updating app', error });
  }
};

export const deleteApp = async (req, res) => {
  try {
    await App.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'App deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting app', error });
  }
};
