package com.example.myapplication123;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import com.aldebaran.qi.sdk.QiContext;
import com.aldebaran.qi.sdk.QiSDK;
import com.aldebaran.qi.sdk.RobotLifecycleCallbacks;
import com.aldebaran.qi.sdk.builder.ChatBuilder;
import com.aldebaran.qi.sdk.builder.QiChatbotBuilder;
import com.aldebaran.qi.sdk.builder.TopicBuilder;
import com.aldebaran.qi.sdk.design.activity.RobotActivity;
import com.aldebaran.qi.sdk.object.conversation.BaseQiChatExecutor;
import com.aldebaran.qi.sdk.object.conversation.Chat;
import com.aldebaran.qi.sdk.object.conversation.EditablePhraseSet;
import com.aldebaran.qi.sdk.object.conversation.Phrase;
import com.aldebaran.qi.sdk.object.conversation.QiChatExecutor;
import com.aldebaran.qi.sdk.object.conversation.QiChatbot;
import com.aldebaran.qi.sdk.object.conversation.Topic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MainActivity extends RobotActivity implements RobotLifecycleCallbacks {
        private QiContext qiContext = null;
        private MediaPlayer mediaPlayer = null;


        private class playHappySongExecutor extends BaseQiChatExecutor {
            public playHappySongExecutor(QiContext qiContext) {
                super(qiContext);
            }
            public void playMedia(int source){
                mediaPlayer.reset();
                mediaPlayer = MediaPlayer.create(qiContext, source);
                mediaPlayer.start();
            }
            @Override
            public void runWith(List<String> params) {
                    mediaPlayer = new MediaPlayer();
                    playMedia(R.raw.crave);

            }
            @Override
            public void stop() { }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Register the RobotLifecycleCallbacks to this Activity.
        QiSDK.register(this, this);
        setContentView(R.layout.activity_main);
    }

    @Override
    protected void onDestroy() {
        // Unregister the RobotLifecycleCallbacks for this Activity.
        QiSDK.unregister(this, this);
        super.onDestroy();
    }

    @Override
    public void onRobotFocusGained(QiContext qiContext) {
                this.qiContext = qiContext;
        // The robot focus is gained.
        Topic topic = TopicBuilder.with(qiContext)
                .withResource(R.raw.hello)
                .build();
        //Create the chat bot
        QiChatbot chatbot = QiChatbotBuilder
                .with(qiContext)
                .withTopic(topic).build();
        //Create the Chat
        Chat chat = ChatBuilder
                .with(qiContext)
                .withChatbot(chatbot).build();
        chat.run();

        HashMap<String, QiChatExecutor> executors = new HashMap<>();
        executors.put("playHappySong", new playHappySongExecutor(qiContext));
        chatbot.setExecutors(executors);

    }

    @Override
    public void onRobotFocusLost() {
        // The robot focus is lost.
    }

    @Override
    public void onRobotFocusRefused(String reason) {
        // The robot focus is refused.
    }
}