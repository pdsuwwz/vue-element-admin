<template>
  <div class="layout-basic-container">
    <NavigationMenuBar />
    <section class="section-container">
      <NavigationNavBar />
      <main class="main-content-box">
        <NavigationPageHeader />
        <div class="inner-content">
          <router-view />
          <ul>
            <li
              v-for="item in 10"
              :key="item"
              style="height: 200px;"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import NavigationMenuBar from '@/components/Navigation/MenuBar/index'
import NavigationNavBar from '@/components/Navigation/NavBar'
import NavigationPageHeader from '@/components/Navigation/PageHeader'
export default {
  name: 'LayoutBasic',
  components: {
    NavigationMenuBar,
    NavigationNavBar,
    NavigationPageHeader
  }
}
</script>
<style lang="scss" scoped>
.layout-basic-container {
  min-height: 100%;
  display: flex;
  min-width: 100%;
  .section-container {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5;
    .main-content-box {
      flex: auto;
      .inner-content {
        padding: 24px;
      }
    }
  }
}
</style>
