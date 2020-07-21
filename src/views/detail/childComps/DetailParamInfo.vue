<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
		<div v-for="item in paramInfo.rule" :key="item.id">
			<div v-for="list in item" class="flex" :key="list.id">
				<div v-for="listitem in list" class="rule-list-item" :key="listitem.id">
					{{listitem}}
				</div>
			</div>
		</div>
		<div v-for="(info, index) in paramInfo.info" :key="index" class="flex info-list-wrap">
			<div class="info-list-tit">{{info.key}}</div>
			<div>{{info.value}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailParamInfo',
		props: {
			paramInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
		border-bottom: 4px solid #ececec;
	}
	.rule-list-item {
		font-size: 12px;
		width: 20%;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
	}
	.info-list-wrap {
		font-size: 14px;;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
		line-height: 20px;
		.info-list-tit {
			width: 18%;
		}
	}
</style>
