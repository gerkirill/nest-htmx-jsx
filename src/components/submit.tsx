import { h } from 'nest-jsx-template-engine';

export interface SubmitProps {
    title: string;
}

export function Submit({ title }: SubmitProps): string {
    return <button type="submit" class="btn btn-primary" > {title}</button >;
}