package com.bosc.voiceassistant.aba.service.i;

import com.bosc.voiceassistant.aba.dao.IUserDao;
import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午7:38
 */
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserDao userDao;

    @Override
    public UserInfo getUserById(Integer userId) {
        return userDao.findByUserId(userId);
    }

    @Override
    public UserInfo getUserByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public UserInfo getUserByUserName(String userName) {
        return userDao.findByUserName(userName);
    }

    @Override
    public UserInfo addUser(UserInfo userInfo) {
        UserInfo existUser = getUserByUserName(userInfo.getUserName());
        if (existUser != null) {
            return null;
        } else {
            return userDao.save(userInfo);
        }
    }

    @Override
    public UserInfo updateUser(UserInfo userInfo) {
        UserInfo existUser = getUserByUserName(userInfo.getUserName());
        if (existUser != null) {
            return null;
        }
        return userDao.save(userInfo);
    }

    @Override
    public void deleteUser(UserInfo userInfo) {
        userDao.delete(userInfo);
    }


    @Override
    public List<UserInfo> getAllUsers() {
        return userDao.findAll();
    }
}
