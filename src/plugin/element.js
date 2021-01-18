import Vue from 'vue'
import {
    Button,
    Avatar,
    Tag,
    Pagination,
    Message 
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Avatar);
Vue.use(Tag);
Vue.use(Pagination)
Vue.prototype.$message = Message;