<template>
  <div id="visa">
    <form>
      <h2>Enter Movie details:</h2>
      <p>Add movie details which is not present in the system.</p>
      <label for="Movie name">Movie Name:</label>
      <input type="text" required />
      <br />
      <label for="IMDB url">IMDB URL:</label>
      <input type="url" required />
      <br />
      <label for="Image url">Image URL:</label>
      <input type="url" required />
      <br />
      <input type="submit" value="Submit" />
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "Test"
};
</script>

<style scoped>
#visa {
  box-sizing: border-box;
}
input[type="text"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type="url"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
npm
