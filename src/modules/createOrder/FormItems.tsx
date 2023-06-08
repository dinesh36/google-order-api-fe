import {FORM_ITEM_TYPES, FORM_ITEMS} from "./shared/formData.contants";
import React from "react";
import {FormDataType, FormItemType} from "./shared/formData.type";
import {get as _get} from 'lodash';
import {set as _set} from 'lodash';

type FormItemProps = {
  formData: FormDataType,
  setFormData: (formData: FormDataType)=>void
}

const FormItems = ({formData, setFormData}: FormItemProps)=>{

  const onChangeFormValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string)=>{
    const newFormData = {...formData};
    const value = event.target.value;
    _set(newFormData, key, value);
    setFormData(newFormData);
  }

  const getFormItemCmp = ({key, type, label}: FormItemType)=>{
    // @ts-ignore
    const formItemValue = _get(formData, key);
    const formItemCmp = type === FORM_ITEM_TYPES.INPUT ? (<input
      style={{ width: '100%' }}
      value={formItemValue}
      onChange={(event)=>onChangeFormValue(event, key)}
    />
  ) : (
      <textarea
        style={{ width: '100%', height: 50 }}
        value={formItemValue}
        onChange={(event)=>onChangeFormValue(event, key)}
      />
    );

    return (
      <div style={{ paddingBottom: 20 }} key={key}>
        <span>
          {label}
          {' '}
          :
        </span>
        <br />
        {formItemCmp}
      </div>
    );
  }

  const renderFormItems = () => FORM_ITEMS.map((formItem: any) => {
    if(formItem.group){
      return <div key={formItem.group} style={{border: `1px solid gray`, padding: 10, margin: `10px 0`}}>
          <h2>{formItem.group}</h2><br/>
          {formItem.items.map((item: FormItemType)=>getFormItemCmp(item))}
      </div>
    }
    return getFormItemCmp(formItem);
  });

  return <>
    {renderFormItems()}
  </>;
}
export default FormItems;
