import { Component } from '@angular/core';

@Component({
    selector: 'progress-spinner-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-progress-spinner</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-progress-spinner-svg</td>
                        <td>SVG element.</td>
                    </tr>
                    <tr>
                        <td>p-progress-spinner-circle</td>
                        <td>Circle element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
