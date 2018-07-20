import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '客房管理',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '客房信息',
        path: 'analysis',
      },
    ],
  },
  {
    name: '住客管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '住客信息',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '订单管理',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '订单详情',
        path: 'table-list',
      },
      {
        name: '账务详情',
        path: 'basic-list',
        authority: 'admin',
      },
    ],
  },
  {
    name: '报表管理',
    icon: 'profile',
    path: 'profile',
    authority: 'admin',
    children: [
      {
        name: '客房出租率报表',
        path: 'basic',
      },
      {
        name: '日报表',
        path: 'advanced',
      },
    ],
  },
  {
    name: '系统管理',
    icon: 'check-circle-o',
    path: 'result',
    authority: 'admin',
    children: [
      {
        name: '角色信息',
        path: 'success',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
