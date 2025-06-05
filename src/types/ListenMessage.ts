import { Attachment } from ".";

export type ListenMessage =
  | {
      type: "message";
      attachments: Attachment[];
      args: string[];
      body: string;
      isGroup: boolean;
      mentions: { [id: string]: string };
      messageID: string;
      senderID: string;
      threadID: string;
      isUnread: boolean;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        image: {
          attachmentID: string;
          width: number;
          height: number;
          url: string;
        };
      };
      logMessageType: "log:thread-image";
      threadID: string;
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        addedParticipants: {
          fanoutPolicy: string;
          firstName: string;
          fullName: string;
          groupJoinStatus: string;
          initialFolder: string;
          initialFolderId: {
            systemFolderId: string;
          };
          lastUnsubscribeTimestampMs: string;
          userFbId: string;
          isMessengerUser: boolean;
        }[];
      };
      logMessageType: "log:subscribe";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: { leftParticipantFbId: string };
      logMessageType: "log:unsubscribe";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: { name: string };
      logMessageType: "log:thread-name";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        theme_color: string;
        gradient?: string;
        should_show_icon: string;
        theme_id: string;
        accessibility_label: string;
        theme_name_with_subtitle: string;
        theme_emoji?: string;
      };
      logMessageType: "log:thread-color";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        thread_quick_reaction_instruction_key_id: string;
        thread_quick_reaction_emoji: string;
        thread_quick_reaction_emoji_url: string;
      };
      logMessageType: "log:thread-icon";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        nickname: string;
        participant_id: string;
      };
      logMessageType: "log:user-nickname";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        THREAD_CATEGORY: string;
        TARGET_ID: string;
        ADMIN_TYPE: string;
        ADMIN_EVENT: "add_admin" | "remove_admin";
      };
      logMessageType: "log:thread-admins";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: {
        removed_option_ids: string;
        question_json: string;
        event_type:
          | "question_creation"
          | "update_vote"
          | "add_unvoted_option"
          | "multiple_updates";
        added_option_ids: string;
        new_option_texts: string;
        new_option_ids: string;
        question_id: string;
      };
      logMessageType: "log:thread-poll";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: { APPROVAL_MODE: "0" | "1"; THREAD_CATEGORY: string };
      logMessageType: "log:thread-approval-mode";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "event";
      author: string;
      logMessageBody: string;
      logMessageData: any;
      logMessageType: "log:thread-call";
      threadID: string;
      participantIDs: string[];
    }
  | {
      type: "typ";
      from: string;
      fromMobile: boolean;
      isTyping: boolean;
      threadID: string;
    }
  | {
      type: "read";
      threadID: string;
      time: number;
    }
  | {
      type: "read_receipt";
      reader: string;
      threadID: string;
      time: number;
    }
  | {
      type: "message_reaction";
      threadID: string;
      messageID: string;
      reaction: string;
      senderID: string;
      userID: string;
      reactionTimestamp: number;
    }
  | {
      type: "presence";
      statuses: number;
      timestamp: number;
      userID: string;
    }
  | {
      type: "message_unsend";
      threadID: string;
      senderID: string;
      messageID: string;
      deletionnTimestamp: number;
    }
  | {
      type: "message_reply";
      attachments: Attachment[];
      args: string[];
      body: string;
      isGroup: boolean;
      mentions: { [id: string]: string };
      messageID: string;
      senderID: string;
      threadID: string;
      isUnread: boolean;
      participantIDs: string[];
      messageReply: {
        attachments: Attachment[];
        body: string;
        isGroup: boolean;
        mentions: { [id: string]: string };
        messageID: string;
        senderID: string;
        threadID: string;
        isUnread: boolean;
      };
    };
