<template>
	<el-row class="container">
		<!-- 头部开始 -->
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed ? 'logo-collapse-width' : 'logo-width'">
				<i class="fa fa-cog fa-spin"></i>
				<span class="logo-title">{{ collapsed ? '' : sysName }}</span>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="../assets/user.jpg" /> {{ sysUserName }}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<div class="collapsedbox" :class="collapsed ? 'collapsedbox-active' : ''" @click="collapse">
				<i v-if="!collapsed" class="el-icon-s-fold"></i>
				<i v-else class="el-icon-s-unfold"></i>
			</div>
		</el-col>
		<!-- 头部结束 -->
		<!-- 内容开始 -->
		<el-col :span="24" class="main">
			<!-- 导航菜单开始 -->
			<aside :class="collapsed ? 'menu-collapsed' : ''" v-if="!collapsed">
				<el-menu 
					:default-active="$route.path" 
					class="el-menu-vertical-demo" 
					router 
				>
					<template 
						v-for="(item,index) in $router.options.routes" 
					>	
						<div v-if="!item.hidden" :key="index">
							<el-submenu :index="index + ''">
								<template slot="title">
									<i :class="item.iconCls"></i>
									{{item.name}}
								</template>
								<el-menu-item 
									v-for="child in item.children" 
									:index="child.path" 
									:key="child.path" 
								>
									<div>{{child.name}}</div>
								</el-menu-item>
							</el-submenu>
						</div>
					</template>
				</el-menu>
			</aside>
			<!-- 导航菜单结束 -->
			<!-- 主体内容开始 -->
			<section class="content-container">
				<!-- 快速导航栏开始 -->
				<div class="tagsviewbox">
					<el-col :span="24" class="tagsview">
						<tags-view />
					</el-col>
				</div>
				<!-- 快速导航栏结束 -->
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
			<!-- 主体内容结束 -->
		</el-col>
		<!-- 内容结束 -->
	</el-row>
</template>

<script>
import TagsView from "@/components/TagsView"

export default {
	data() {
		return {
			sysName:'Vue Admin',
			collapsed:false,
			sysUserName: '',
			sysUserAvatar: '',
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		}
	},
	components: {
		TagsView
	},
	methods: {
		//退出登录
		logout: function () {
			var _this = this
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user')
				_this.$router.push('/login')
			}).catch(msg => {
				console.log(msg)
			})
		},
		//折叠导航栏
		collapse(){
			this.collapsed = !this.collapsed;
		},
		showMenu(i, status){
			this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-" + i)[0].style.display = status ? "block" : "none"
		}
	},
	mounted() {
		var user = sessionStorage.getItem('user')
		if (user) {
			user = JSON.parse(user)
			this.sysUserName = user.name || ''
			this.sysUserAvatar = user.avatar || ''
		}
	}
}
</script>

<style lang="scss">
	@import '~scss_vars';
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			position: relative;
			height: 60px;
			line-height: 60px;
			color:#fff;
			background: $color-primary;
			.collapsedbox{
				position: absolute;
				width: 40px;
				height: 40px;
				margin: 10px 0px 0px 220px;
				i{
					font-size: 40px;
				}
			}
			.collapsedbox-active{
				margin: 10px 0px 0px 80px;
			}
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238, 241, 146, .3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:200px;
				text-align: center;
				i{
					margin-right: 7px;
				}
			}
			.logo-collapse-width{
				width:60px;
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 200px!important;
				width: 200px;
				.el-menu{
					height: 100%;
					color: #fff;
					background-color: #484f56;
					i{
						color: #fff;
					}
					.el-icon-platform-eleme{
						margin-left: -4px;
					}
					.el-menu-item{
						min-width: 199px;
						color: #fff;
					}
					.el-menu-item:hover{
						background-color: rgb(41, 45, 48);
					}
					.is-active{
						color: #ffd04b;
						.is-active{
							background-color: rgb(41, 45, 48);
						}
					}
					.el-submenu__title{
						color: #fff;
					}
					.el-submenu__title:hover{
						background-color: rgb(41, 45, 48);
					}
					.el-icon-message{
						width: 16px;
						font-size: 18px;
						margin-right: 10px;
					}
					.fa-map-marker{
						width: 14px;
						font-size: 18px;
						margin-left: 2px;
					}
					.fa-cog{
						width: 16px;
						font-size: 16px;
					}
					.el-icon-warning, .el-icon-s-grid{
						width: 16px;
						font-size: 14px;
						margin-right: 10px;
					}
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position: absolute;
						top: 0px;
						left: 60px;
						z-index: 99999;
						height: auto;
						display: none;
					}
				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 200px;
				width: 200px;
			}
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 10px;
				.tagsviewbox{
					width: 100%;
					height: 40px;
					border-bottom: 1px solid #d8dce5;
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
				}
				.breadcrumb-container {
					margin-top: 10px;
					.title {
						width: 200px;
						float: left;
						font-size: 14px;
						font-weight: bold;
						margin-bottom: 10px;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>