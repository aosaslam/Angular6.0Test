import {Component} from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 101;
    serverStatus = 'active';

    getServerStatus = () => {
        return this.serverStatus;
    }
}
