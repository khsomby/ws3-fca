import {
  Thread,
  ThreadList,
  Friend,
  UserIDResponse,
  ListenMessage,
  EventEmitter,
} from ".";

export type Api = {
  addUserToGroup: (
    userID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeAdminStatus: (
    threadID: string,
    adminIDs: string | string[],
    adminStatus: boolean,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeApprovalMode: (
    approvalMode: 0 | 1,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeArchivedStatus: (
    threadOrThreads: string | string[],
    archive: boolean,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeBlockedStatus: (
    userID: string,
    blocked: boolean,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeBlockedStatusMqtt: (
    userID: string,
    status: boolean,
    type: string?,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeGroupImage: (
    image: ReadableStream,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeNickname: (
    nickname: string,
    threadID: string,
    pariticipantID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeThreadColor: (
    color: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  changeThreadEmoji: (
    emoji: string | null,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  createNewGroup: (
    participantIDs: string[],
    groupTitle?: string,
    callback?: (err: Error, threadID: string) => void,
  ) => Promise<string>;
  createPoll: (
    title: string,
    threadID: string,
    options?: { [item: string]: boolean },
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  createPollMqtt: (
    title: string,
    options?: { [item: string]: boolean },
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  deleteMessage: (
    messageOrMessages: string | string[],
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  deleteThread: (
    threadOrThreads: string | string[],
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  editMessage: (
    text: string,
    messageID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  forwardAttachment: (
    attachmentID: string,
    userOrUsers: string | string[],
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  forwardMessage: (
    messageID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  getAppState: () => any;
  getCurrentUserID: () => string;
  getEmojiUrl: (c: string, size: number, pixelRatio: number) => string;
  getFriendsList: (
    callback?: (err: Error | null, friends: Friend[]) => void,
  ) => Promise<Friend[]>;
  getThreadHistory: (
    threadID: string,
    amount: number,
    time?: number,
    callback?: (err: Error | null, messages: any[]) => void,
  ) => Promise<any[]>;
  getThreadInfo: (
    threadID: string,
    callback?: (err: Error | null, thread: Thread) => void,
  ) => Promise<Thread>;
  getThreadList: (
    limit: number,
    timestamp: number | null,
    tags: string[],
    callback?: (err: Error | null, threads: ThreadList) => void,
  ) => Promise<ThreadList>;
  getThreadPictures: (
    threadID: string,
    offset: number,
    limit: number,
    callback?: (err: Error | null, pictures: string[]) => void,
  ) => Promise<string[]>;
  getUserID: (
    name: string,
    callback?: (err: Error | null, obj: UserIDResponse) => void,
  ) => Promise<UserIDResponse>;
  getUserInfo: (
    userOrUsers: string | string[],
    callback?: (err: Error | null, users: { [id: string]: User }) => void,
  ) => Promise<{ [id: string]: User }>;
  threadColors: {
    [color: string]: string;
  };
  handleMessageRequest(
    threadOrThreads: string | string[],
    accept: boolean,
    callback: (err?: Error) => void,
  ): Promise<void>;
  listen(
    callback?: (err: Error | null, message: ListenMessage) => void,
  ): EventEmitter;
  listenMqtt(
    callback?: (err: Error | null, message: ListenMessage) => void,
  ): EventEmitter & { stopListening: (callback?: () => void) => void };
  logout: (callback?: (err?: Error) => void) => Promise<void>;
  markAsDelivered(
    threadID: string,
    messageID: string,
    callback?: (err?: Error) => void,
  ): Promise<void>;
  markAsRead(
    threadID: string,
    read?: boolean,
    callback?: (err?: Error) => void,
  ): Promise<void>;
  markAsReadAll: (callback?: (err?: Error) => void) => Promise<void>;
  markAsSeen(
    seenTimestamp?: number,
    callback?: (err?: Error) => void,
  ): Promise<void>;
  muteThread: (
    threadID: string,
    muteSeconds: number,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  pinMessage: (
    pinMode: boolean,
    messageID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  removeUserFromGroup: (
    userID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  resolvePhotoUrl: (
    photoID: string,
    callback?: (err: Error | null, url: string) => void,
  ) => Promise<string>;
  sendMessage: typeof sendMessage;
  sendTypingIndicator: (
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  sendTypingIndicatorMqtt: (
    isTyping: boolean,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  setMessageReaction: (
    reaction: string,
    messageID: string,
    callback?: (err?: Error) => void,
    forceCustomReaction?: boolean,
  ) => Promise<void>;
  setMessageReactionMqtt: (
    reaction: string,
    messageID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  setOptions: (options: Partial<IFCAU_Options>) => void;
  setTitle: (
    newTitle: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  setTheme: (
    themeID?: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  unsendMessage: (
    messageID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
  unsendMessageMqtt: (
    messageID: string,
    threadID: string,
    callback?: (err?: Error) => void,
  ) => Promise<void>;
};
