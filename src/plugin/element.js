import Vue from 'vue'
import {
    Button,
    Avatar,
    Tag,
    Pagination,
    Message,
    Dialog,
    Form,
    Input,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Avatar);
Vue.use(Tag);
Vue.use(Pagination)
Vue.prototype.$message = Message;
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Input)
