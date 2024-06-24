const mediaFiles = [
    "song1.mp3",
    "song2.mp3",
    "movie1.mp4",
    "picture1.png",
    "song3.mp3",
    "movie2.mp4",
    "recording1.wav",
    "song4.mp3",
    "archive.old.song.mp3",
     ""
   
  ];
  
  
  
  const countMediaExtensions = (files) => {
    const extensionCount = {};
    const extensionData = {};
  
    files.forEach(filename => {
      if (filename.trim() === "") {
        return;
      }
  
      const parts = filename.split('.');
      if (parts.length <= 1) {
        return;
      }
  
      const extension = parts[parts.length - 1].toLowerCase();
  
      if (extensionCount.hasOwnProperty(extension)) {
        extensionCount[extension]++;
        extensionData[`${extension}Data`].push(filename);
      } else {
        extensionCount[extension] = 1;
        extensionData[`${extension}Count`] = 1;
        extensionData[`${extension}Data`] = [filename];
      }
    });
  
    const output = {};
    Object.keys(extensionCount).forEach(ext => {
      output[`${ext}Count`] = extensionCount[ext];
      output[`${ext}Data`] = extensionData[`${ext}Data`];
    });
  
    return output;
  };
  
  const result = countMediaExtensions(mediaFiles);
  console.log(result);
  