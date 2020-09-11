package com.bosc.voiceassistant.aba;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.Cookie;

public class AbaApplicationTests {

    @Autowired
    private WebApplicationContext webApplicationContext;

    public MockMvc mvc;
    public MockHttpSession session;
    public Cookie[] cookies = new Cookie[1];

    @Before
    public void before() throws Exception {
        mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        session = new MockHttpSession();
        cookies[0] = new Cookie("mykey", "myvalue");
    }

    @After
    public void after() throws Exception {
    }

    public void testGetIsOK(String url) throws Exception {
        mvc.perform(MockMvcRequestBuilders.get(url).session(session).cookie(cookies))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testGet() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("localhost:8080" + "/getUserByEmail")
                .contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(MockMvcResultMatchers.status().isOk());
    }
}
