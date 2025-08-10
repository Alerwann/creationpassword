const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// Garder une référence globale de la fenêtre
let mainWindow;

function createWindow() {
  // Créer la fenêtre principale
mainWindow = new BrowserWindow({
  width: 550,
  height: 650,
  resizable: false,
  webPreferences: {
    nodeIntegration: false,      // Plus sécurisé
    contextIsolation: true,      // Isolation du contexte
    enableRemoteModule: false,   // Désactiver le module remote
  },
  icon: path.join(__dirname, '../assets/password-icon.png')
});

// Empêcher l'ouverture de nouveaux onglets
mainWindow.webContents.setWindowOpenHandler(() => {
  return { action: 'deny' };
});
  // Charger l'app React
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'  // En développement
      : `file://${path.join(__dirname, '../build/index.html')}`  // En production
  );

  // Ouvrir les DevTools en développement
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// L'app est prête
app.on('ready', createWindow);

// Quitter quand toutes les fenêtres sont fermées
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});