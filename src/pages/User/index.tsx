import React from "react";
import { match } from "react-router";
import { BasePage } from "../../common/base-page";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./index.less";

const User: BasePage<{
  user: any;
}> = {
  async prefetch(match: match<{ id: string }>) {
    const id = match.params.id;
    const { data } = await fetch(`/api/user/info/${id}`).then(res =>
      res.json()
    );
    return { user: data };
  },
  page(props) {
    const { user = {} } = props;
    return (
      <DefaultLayout>
        <BasePanel header="用户信息" className="page-user" style="white">
          <div className="register-time">
            注册于：
            {user.created_at}
          </div>
          <img className="avatar" src={user.avatar} alt={user.name} />
          <div className="name">
            <span className="nick-name">{user.nick_name}</span>
            <a
              href={`https://github.com/${user.github_name}`}
              className="github"
            >
              {user.name}
            </a>
          </div>
          <ul className="counters">
            <li>
              <h6>积分</h6>
              <span>{user.score}</span>
            </li>
            <li>
              <h6>主题</h6>
              <span>{user.topic_count}</span>
            </li>
          </ul>
        </BasePanel>
      </DefaultLayout>
    );
  }
};

export default User;
