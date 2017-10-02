<template>
  <div id="sidebar">

  </div>
</template>
<script>
export default {
  
}
</script>
<style>

#sidebar {
    padding: 2.5em 2.5em 0.5em 2.5em;
    background: #312450;
    cursor: default;
    height: 100vh;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    text-align: right;
    top: 0;
    width: 18em;
    z-index: 10000;
}

	  @media screen and (max-width: 1280px) {

	  #sidebar {
	    height: 4.5em;
	    left: 0;
	    line-height: 4.5em;
	    overflow: hidden;
	    padding: 0;
	    text-align: center;
	    top: 0;
	    width: 100%;
	  }
    }

</style>
