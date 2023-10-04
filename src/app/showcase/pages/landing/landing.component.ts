import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Table } from 'primeng/table';
import { AppConfig } from '../../domain/appconfig';
import { Customer, Representative } from '../../domain/customer';
import { AppComponent } from '../../layout/app.component';
import { AppConfigService } from '../../service/appconfigservice';
import { CustomerService } from '../../service/customerservice';
import { NodeService } from '../../service/nodeservice';
import { Router } from '@angular/router';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit, OnDestroy {
    @ViewChild('containerElement') containerElement: ElementRef;

    @ViewChild('dt') table: Table;

    @ViewChild('editor') editor: ElementRef;

    scrollListener: any;

    private window: Window;

    constructor(
        @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: any,
        private renderer: Renderer2, private nodeService: NodeService, private customerService: CustomerService, private configService: AppConfigService,
        private cd: ChangeDetectorRef, public app: AppComponent, private metaService: Meta, private titleService: Title, private router : Router
    ) {
        this.window = this.document.defaultView as Window;
    }

    ngOnInit() {
        this.router.navigateByUrl('/home-page');
    }
    ngOnDestroy() {
        this.unbindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }
}
