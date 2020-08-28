package com.bosc.voiceassistant.aba.server;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * @author Xu Ran
 * @since 2020/8/27 下午3:42
 */
@ServerEndpoint("/websocket/{fylm}") //客户端url访问路径
@Component
public class WebSocketServer {
    //保存所有连接的websocket实体
    private static CopyOnWriteArrayList<WebSocketServer> sWebSocketServers = new CopyOnWriteArrayList<>();
    private Session boSession; //与客户端连接会话session
    private long fyl; //客户端标识
    private Log mLog = LogFactory.getLog(WebSocketServer.class);

    @OnOpen
    public void onOpen(Session session, @PathParam("fylm") long fylm) {
        boSession = session;
        sWebSocketServers.add(this); //保存会话
        mLog.info("-->onOpen new connect fylm is " + fylm);
        fyl = fylm;
    }

    @OnClose
    public void onClose() {
        sWebSocketServers.remove(this);
        mLog.info("-->onClose a connect");
    }

    @OnMessage
    public void onMessage(String msg, Session session) {
        mLog.info("-->on Message" + msg);
        for (WebSocketServer socketServer : sWebSocketServers) {
            socketServer.sendMessage("I have a msg");
        }
    }

    /**
     * 对外发送消息
     * @param msg
     */
    public boolean sendMessage(String msg) {
        try{
            boSession.getBasicRemote().sendText(msg);
        } catch (IOException e) {
            mLog.info(e.toString());
            return false;
        }
        return true;
    }

    /**
     * 对机器发送消息
     * @param msg
     * @param fylm
     */
    public static String sendMessage(String msg, long fylm) {
        boolean success = false;

    }
}
