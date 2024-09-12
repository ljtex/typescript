let appName = "List App1";

import data from '../../db/data.json';
import _ from 'lodash';

console.log(data);

//document.getElementById('list').innerHTML = appName;

var size = _.size(data.list);

for(let i = 0; i < 3; i++) {
    appName += `<div onclick="javascript:window.location.href='?list_id=${data.list[i].id}'">${data.list[i].title}</div>`
}
appName += `Size: ${size}`;

document.getElementById('dev-list').innerHTML = appName
