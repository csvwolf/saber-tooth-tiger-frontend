<template>
  <div>
    <header>
      <nav>
        <router-link :to="{name: 'index'}">Index</router-link>
      </nav>
      <h1>MSTC 报名系统</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import './assets/global.scss';

  html, body {
    height: 100%;
    width: 100%;
    background: map-get($neutral_color, dark_white);
  }

  header {
    width: 100%;
    height: 300px;

    nav {
      height: 40px;
      line-height: 40px;
    }
  }
</style>

<script>
  // import './assets/global.scss';
</script>