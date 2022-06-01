package com.sp.restControler;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sp.dto.FireDto;
import com.sp.service.ServiceFeu;

@RestController
public class RestCtrl {		
	@Autowired
	ServiceFeu fService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/fire/id")
	public Carte getCarte(@PathVariable String id) {
        Carte c=cService.getCarte(Integer.valueOf(id));
        return c;
    }

}
