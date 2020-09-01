package com.bosc.voiceassistant.aba.entity;

import lombok.AllArgsConstructor;
import lombok.Cleanup;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午6:26
 */
@Data
@Entity(name = "User")
public class UserInfo {
    @Id
    @GeneratedValue
    private int userId;

    @Column
    private String userName;

    @Column
    private String
}
