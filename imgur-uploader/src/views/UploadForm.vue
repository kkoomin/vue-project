<template>
  <div class="dropper">
    <input type="file" name id />
    Drop images here
  </div>
</template>

<script>
export default {
  name: "UploadForm"
};
</script>

<style>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background: #999;
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
