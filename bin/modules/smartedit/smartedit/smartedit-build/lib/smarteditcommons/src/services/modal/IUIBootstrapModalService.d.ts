import * as uib from 'angular-ui-bootstrap';
import * as angular from 'angular';
export declare abstract class IUIBootstrapModalService implements uib.IModalService {
    getPromiseChain(): angular.IPromise<any>;
    open(options: uib.IModalSettings): uib.IModalInstanceService;
}
