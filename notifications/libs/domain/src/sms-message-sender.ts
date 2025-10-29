import { IMessageSender } from "./imessage-sender.interface";

export class SmsMessageSender implements IMessageSender {
    constructor() {
        // ensure the method is available on the instance (works around test-runner transform issues)
        (this as any).SendMessage = this.SendMessage.bind(this);
    }

    SendMessage(Message: string): string {
        return "'" + Message + "' : This Message has been sent using SMS";
    }
}