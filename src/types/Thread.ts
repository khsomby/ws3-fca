import { User } from ".";

export type Thread = {
        threadID: string,
        participantIDs: string[],
        threadName: string,
        userInfo: (User & { id: string })[],
        nicknames: { [id: string]: string } | null,
        unreadCount: number,
        messageCount: number,
        imageSrc: string,
        timestamp: number,
        muteUntil: number | null,
        isGroup: boolean,
        isSubscribed: boolean,
        folder: 'INBOX' | 'ARCHIVE' | string,
        isArchived: boolean,
        cannotReplyReason: string | null,
        lastReadTimestamp: number,
        emoji: string | null,
        color: string | null,
        adminIDs: string[],
        approvalMode: boolean,
        approvalQueue: { inviterID: string, requesterID: string, timestamp: string }[]
    }
