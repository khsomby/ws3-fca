export type ThreadList_Participants =
        {
            accountType: "User",
            userID: string,
            name: string,
            shortName: string,
            gender: string,
            url: string,
            profilePicture: string,
            username: string | null,
            isViewerFriend: boolean,
            isMessengerUser: boolean,
            isVerified: boolean,
            isMessageBlockedByViewer: boolean,
            isViewerCoworker: boolean
        } |
        {
            accountType: "Page",
            userID: string,
            name: string,
            url: string,
            profilePicture: string,
            username: string | null,
            acceptMessengerUserFeedback: boolean,
            isMessengerUser: boolean,
            isVerified: boolean,
            isMessengerPlatformBot: boolean,
            isMessageBlockedByViewer: boolean,
        } |
        {
            accountType: "ReducedMessagingActor",
            userID: string,
            name: string,
            url: string,
            profilePicture: string,
            username: string | null,
            acceptMessengerUserFeedback: boolean,
            isMessageBlockedByViewer: boolean
        } |
        {
            accountType: "UnavailableMessagingActor",
            userID: string,
            name: string,
            url: null,
            profilePicture: string,
            username: null,
            acceptMessengerUserFeedback: boolean,
            isMessageBlockedByViewer: boolean
        } |
        {
            accountType: string,
            userID: string,
            name: string
        };
