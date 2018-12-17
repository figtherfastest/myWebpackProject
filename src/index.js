import './css/style.css'
import './css/blue.less'; // 导入less
const hello = require('./hello.js');
document.querySelector("#root").appendChild(hello());
