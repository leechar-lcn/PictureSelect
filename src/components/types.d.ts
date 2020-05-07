declare namespace PictureSelect {
  export interface ItemProps {
    id: string;
    name: string;
    url: string;
  }
  export interface IProps {
    pictures: ItemProps[];
    value: CheckboxValueType[];
    onChange: (value: CheckboxValueType[]) => void;
    preview?: boolean;
  }
}
