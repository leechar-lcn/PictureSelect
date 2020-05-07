import React, { useState, useEffect } from "react";
import { Checkbox, Typography, Modal } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import "./index.less";

const { Paragraph } = Typography;

const imgWidth = 117;

export default (props: PictureSelect.IProps) => {
  const {
    pictures,
    value: initValue,
    onChange,
    preview = true,
  } = props;

  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [value, setValue] = useState<CheckboxValueType[]>(initValue);

  const [visable, setVisable] = useState(false);
  const [currImg, setCurrImg] = useState("");

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    setValue(e.target.checked ? pictures.map((item) => item.id) : []);
  };

  const onCheckItem = (e: CheckboxValueType[]) => {
    setIndeterminate(!!e.length && e.length < pictures.length);
    setCheckAll(e.length === pictures.length);
    setValue(e);
  };

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className="picture-select">
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        style={{ marginBottom: 16 }}
      >
        已选中{value.length}个文件
      </Checkbox>
      <Checkbox.Group onChange={onCheckItem} value={value}>
        {pictures.map((item) => (
          <div key={item.id}>
            <Checkbox value={item.id} className="check-box" />
            <img
              width={imgWidth}
              src={item.url}
              alt=""
              onClick={() => {
                setCurrImg(item.url);
                setVisable(true);
              }}
            />
            <Paragraph style={{ width: imgWidth }} ellipsis>
              {item.url}
            </Paragraph>
          </div>
        ))}
      </Checkbox.Group>
      {preview ? (
        <Modal
          width={800}
          title="图片预览"
          visible={visable}
          footer={null}
          onCancel={() => setVisable(false)}
        >
          <img src={currImg} width="100%" alt="" />
        </Modal>
      ) : null}
    </div>
  );
};
