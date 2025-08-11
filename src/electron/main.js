const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 550,
    height: 650,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,           // Activé pour permettre l'exécution
      contextIsolation: false,         // Désactivé pour compatibilité
      enableRemoteModule: true,        // Activé
      webSecurity: false,              // Désactivé pour les fichiers locaux
      allowRunningInsecureContent: true, // Permettre le contenu local
      experimentalFeatures: true,      // Fonctionnalités expérimentales
      sandbox: false                   // Désactiver le sandbox
    }
  });

  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });

  const isDev = !app.isPackaged;
  
  if (isDev) {
    console.log('Mode développement');
    mainWindow.loadURL('http://localhost:3000');
  } else {
    console.log('Mode production');
    // Chemin pour l'app packagée
    const indexPath = path.join(__dirname, '..', '..', 'build', 'index.html');
    console.log('Chargement du fichier:', indexPath);
    mainWindow.loadFile(indexPath);
  }

  // DevTools pour vérifier
  // mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error('Échec de chargement:', errorCode, errorDescription, validatedURL);
  });

  // Vérifier que JavaScript est activé
  mainWindow.webContents.on('dom-ready', () => {
    console.log('DOM prêt');
    mainWindow.webContents.executeJavaScript('console.log("JavaScript fonctionne !");');
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

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