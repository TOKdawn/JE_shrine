<template>
    <div id="zrelease">

   <form action="http://127.0.0.1:3000/user/login" method="post" >
        name: <input type="text" name="loginEmail" id="loginEmail"> pwd: <input type="text" name="loginPsd" id="loginPsd">
        <input type="submit" value="submit">
    </form>


    <input type="file" name="file" id="file" @change="previewImage" multiple/>
    <button id="upload" @click="uploadFile">上传</button>
    <span id="progress">0%</span>
    <img id="image" src="" width="200" />


    </div>
</template>
<script type="text/ecmascript-6">

  export default {
  data(){
    return {
        file : document.querySelector('#file'),
       upload : document.querySelector('#upload'),
       progress : document.querySelector('#progress'),
       image : document.querySelector('#image'),
        xhr : new XMLHttpRequest(),
    }
  },
  created () {
    
  },
  methods: {
      uploadFile: function (event){
          var formData = new FormData();
          formData.append('test-upload', file.files[0]);
          xhr.onload = uploadSuccess;
          xhr.upload.onprogress = setProgress;
          xhr.open('post', 'http://localhost:3000/file/upload', true);
          xhr.send(formData);
      },
      previewImage: function(event){

      var reader = new FileReader();
          reader.onload = function (event) {
              image.src = event.target.result;
          };
          reader.readAsDataURL(event.target.files[0]);
      },
      uploadSuccess:  function (event) {
          if (xhr.readyState === 4) {
              console.log(xhr.responseText);
          }
      },

      // 进度条
      setProgress:function (event) {
          if (event.lengthComputable) {
              var complete = Number.parseInt(event.loaded / event.total * 100);
              progress.innerHTML = complete + '%';
          }
      }

  }



    
  }
</script>
<style scoped>

#zrelease {
  color: #888;
}
</style>
