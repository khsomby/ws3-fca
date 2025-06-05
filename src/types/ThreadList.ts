import { ThreadList_Participants } from ".";

export type ThreadList = {
        threadID: string,
        name: string,
        unreadCount: number,
        messageCount: number,
        imageSrc: string,
        emoji: string | null,
        color: string | null,
        nicknames: { userid: string, nickname: string }[],
        muteUntil: number | null,
        participants: ThreadList_Participants[],
        adminIDs: string[],
        folder: "INBOX" | "ARCHIVED" | "PENNDING" | "OTHER" | string,
        isGroup: boolean,
        customizationEnabled: boolean,
        participantAddMode: string,
        reactionMuteMode: string,
        isArchived: boolean,
        isSubscribed: boolean,
        timestamp: number,
        snippet: string,
        snippetAttachments: string
        snippetSender: string,
        lastMessageTimestamp: number,
        listReadTimestamp: number | null,
        cannotReplyReason: string | null,
        approvalMode: string
    }[]
