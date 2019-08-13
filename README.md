# 3-way-to-sync-data-from-parent-to-child-component
structure directive ngIf and ngFor
<ng-container *ngIf="pageMode === 'NEW'; else elseBlock">
    <summary #summary [page]="this"></summary>
</ng-container>
<ng-template #elseBlock>
    <ng-container *ngFor="let objectTypeSection of objectTypeSections?.objectTypeSections; let i=index;">
        <ng-container [ngSwitch]="objectTypeSection?.sectionName">
            <item-summary #summary *ngSwitchCase="'Summary'" [objectTypeSection]="objectTypeSection" [page]="this"></item-summary>
            <obj-content #content *ngSwitchCase="'Content'" [objectTypeSection]="objectTypeSection" [page]="this"></obj-content>
        </ng-container>
        <ng-container *ngIf="i === objectTypeSections.objectTypeSections.length -1">
            <div spy (afterFirstViewCheckedEvent)="loadAllSectionsEventHandler($event)" id="hasAllSectionsLoaded"></div>
        </ng-container>
    </ng-container>
</ng-template>