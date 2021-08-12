import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui'
// 配置全局弹窗
import {Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 直接挂载到原型上，跟toast一样的
Vue.prototype.$message = Message
