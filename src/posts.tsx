import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, ReferenceInput, SimpleForm, TextInput, Create } from "react-admin";
import { useRecordContext} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
   
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
  };

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Edit>
  );


  export const PostCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Create>
  );
