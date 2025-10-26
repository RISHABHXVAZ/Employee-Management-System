package net.rishabh.ems.mapper;

import net.rishabh.ems.dto.DepartmentDto;
import net.rishabh.ems.entity.Department;

public class DepartmentMapper {


    public static DepartmentDto maptoDepartmentDto(Department department){
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    public static Department maptoDepartment(DepartmentDto departmentDto){
        return new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}
