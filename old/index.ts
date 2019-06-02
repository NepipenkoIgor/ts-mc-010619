import { generateMenu } from '../old/menu';
import { menuList } from '../old/menu/data';

const element: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;

element.innerHTML = generateMenu(menuList);
element.addEventListener('click', (event: MouseEvent) => {
    const el: HTMLElement = event.target as HTMLElement;
    const {classList: cl} = el;
    if (!cl.contains('title')) {
        return;
    }
    const parentLI: HTMLLIElement = el.parentElement as HTMLLIElement;
    parentLI.classList.toggle('menu-open');
});
