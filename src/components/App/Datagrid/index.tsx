import React, { forwardRef } from "react";
import MaterialTable, { MaterialTableProps } from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Add, Delete, Save } from "@material-ui/icons";

const tableIcons: any = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props: any, ref: any) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props: any, ref: any) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props: any, ref: any) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props: any, ref: any) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props: any, ref: any) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props: any, ref: any) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props: any, ref: any) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props: any, ref: any) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props: any, ref: any) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props: any, ref: any) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props: any, ref: any) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props: any, ref: any) => (
    <ViewColumn {...props} ref={ref} />
  )),
  Save: forwardRef((props: any, ref: any) => <Save {...props} ref={ref} />),
};

const Datagrid = () => {
  const tableRef = React.useRef<any>(null);

  return (
    <div>
      <MaterialTable
        // onSelectionChange={(data) => {
        //   setSelectionValues(data);
        //   console.log(selectionValues);
        // }}
        tableRef={tableRef}
        localization={{
          body: {
            emptyDataSourceMessage: `Nenhum(a) placeholder encontrado(a)`,
          },
          toolbar: {
            searchTooltip: "Procurar por um campo específico",
            searchPlaceholder: "Pesquisar",
            nRowsSelected: `{0} placeholder selecionados`,
          },
          pagination: {
            labelRowsSelect: "linhas sendo exibidas",
            labelDisplayedRows: "{count} de {from}-{to}",
            firstTooltip: "Primeira página",
            lastTooltip: "Última página",
            nextTooltip: "Próxima página",
            previousTooltip: "Página anterior",
          },
          header: {
            actions: "Ações",
          },
        }}
        icons={tableIcons}
        title={"placeholder" + "s"}
        columns={[]}
        data={[]}
        actions={[
          {
            icon: Edit,
            tooltip: `Editar 'placeholder`,
            onClick: (event, rowData) => {
              if (tableRef!.current!.dataManager!.selectedCount > 1) {
                console.log("something");
              } else {
                // handleUpdateDialogOpen()
                console.log("something else");
              }
            },
          },
          {
            icon: Add,
            tooltip: `Adicionar placeholder`,
            isFreeAction: true,
            onClick: (event) => console.log("ok"),
          },
          (rowData) => ({
            icon: Delete,
            tooltip: `Excluir placeholder`,
            onClick: (event, rowData) => {
              console.log("yet again");
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          selection: true,
        }}
      />
    </div>
  );
};

export default Datagrid;
