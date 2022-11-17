   const getChar = (storage,api) =>{
      // storage.isLoaded = false;
      api.get(storage.apiUrl)
      .then(result =>{
        storage.charData = result.data;
        // storage.isLoaded = true;
      })
    }

    export { getChar } 