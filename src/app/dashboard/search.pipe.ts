import {Pipe, PipeTransform, Injectable} from '@angular/core';

import {Tag} from '../tag/tag.model';

@Pipe({
    name: 'searchFilter'
})
@Injectable()
export class SearchPipe implements PipeTransform{
    transform(tags: Tag[],  criteria: string): any[] {
        if (!tags) return [];
        return tags.filter((tag) => tag.name.toLocaleLowerCase().startsWith(criteria.toLocaleLowerCase()) );
    }
}
