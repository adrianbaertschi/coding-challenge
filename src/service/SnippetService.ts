import {Snippet} from "../model/Model";

class SnippetService {
    code: Snippet[] =
        [
            {
                "name": "Selection Sort",
                "description": "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.",
                lines: [
                    {no: 1, code: 'abc'},
                    {no: 2, code: 'def'},
                    {no: 3, code: 'ghi'},
                ]
            },
            {
                "name": "Other Sort",
                "description": "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.",
                lines: [
                    {no: 1, code: 'aaa'},
                    {no: 2, code: 'bbb'},
                    {no: 3, code: 'ccc'},
                ]
            }
        ];

    findSnippet(id: number): Snippet {
        return this.code[id];
    }

    get all(): Snippet[] {
        return this.code;
    }


}

export default SnippetService;