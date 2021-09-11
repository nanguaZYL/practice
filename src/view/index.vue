<template>
  <el-container>
    <el-aside :width="!isCollapse ? '200px' : '64px'">
      <!-- @open="handleOpen" -->
      <!-- @close="handleClose" -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :unique-opened="true"
        router
      >
        <el-menu-item class="">
          <i class="el-icon-location"></i>
          <span slot="title">标题</span>
        </el-menu-item>
        <template v-for="item in menuList">
          <el-submenu
            v-if="item.children.length"
            :key="item.path"
            :index="item.path"
          >
            <template slot="title">
              <i :class="item.menuIcon"></i>
              <span>{{ item.label }}</span>
            </template>
            <template v-for="items in item.children">
              <el-menu-item :key="items.path" :index="items.path">
                <i :class="items.menuIcon"></i>
                <span slot="title">{{ items.label }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :key="item.path" :index="item.path">
            <i :class="item.menuIcon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-main>
      <el-container>
        <el-header>
          <div @click="isCollapse = !isCollapse">13245</div>
          <div></div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          label: 'page1',
          path: '/',
          menuIcon: 'el-icon-location',
          children: [
            { label: '分页', menuIcon: 'el-icon-location', path: '/pages' },
          ],
        },
        {
          label: 'page2',
          path: '/path',
          menuIcon: 'el-icon-location',
          children: [],
        },
        {
          label: 'page3',
          path: '/no',
          menuIcon: 'el-icon-location',
          children: [
            { label: '分页', path: '/pages', menuIcon: 'el-icon-location' },
          ],
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less">
.el-container {
  width: 100%;
  height: 100%;
  & > .el-main {
    padding: 0;
    & > .el-container {
      & > .el-header {
        background: #fff;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        line-height: 60px;
      }
    }
  }
  & > .el-aside {
    .el-menu-vertical-demo {
      height: 100%;
      overflow: auto;
    }
    .fullName {
      background: #fff;
      color: #656d92;
      position: sticky;
      top: 0;
      height: 60px;
      z-index: 10;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: solid 1px #e6e6e6;
    }
  }
}
</style>
