<div class="carousel__component" style="display: block;">
			<div class="carousel__component--headline">Sous la loupe</div>
			<div class="carousel__component--carousel js-owl-carousel js-owl-default owl-carousel owl-theme" style="opacity: 1; display: block;">
						<div class="owl-wrapper-outer" style="margin-bottom: 40px;"><div class="owl-wrapper" style="width: 2720px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);"><div class="owl-item" style="width: 272px;"><div data-tms-productid="$entity1.id" class="new carousel__item product-item productid-$entity1.id" data-productid="$entity1.id" id="productid-$entity1.id">
							                    <div class="flag new">
                    NOUVEAU</div>
                <div class="wrapper ">
									<div class="thumb">
								        <div class="icons">
							                </div>
										<a href="$entity1.pageURL_fr" title="$entity1.name_fr">
											<img src="$entity1.thumbnailUrl" alt="$entity1.name_fr" title="$entity1.name_fr">
			</a>
										</div>
									<div class="details">
										<a class="name" href="$entity1.pageURL_fr">$entity1.name_fr
</a>
										<div class="priceinfo">
											<input type="hidden" class="productcode" value="$entity1.id">
			 <div class="addtolist usecolorbox" errorlogin="<span class='icon-alert'></span><a href='/fr/login' class='listlogin'>Connectez-vous ici</a>&nbsp;Pour accéder à vos listes et à vos produits fréquemment achetés.">			 
			 <span class="lists-toadd-outlined"></span><!-- <span class='icon icon-plus-circle' id='addToList-plus-icon'></span> -->
			 <div class="closearea" style="display:none"></div>
              <div class="addtolistexpanded">
                 <p class="title" id="whltitle">Ajouter à une liste</p>
                 <p id="firstlistever">Créer une première liste</p>
                  <ul id="mylists" class="mylists">
                  <li>Mainly drinks<span class="icon icon-plus"></span></li>
                  <li>test 2<span class="icon icon-plus"></span></li>
                  <li>Test 1<span class="icon icon-plus"></span></li>
                  <li>Birra Preferisco<span class="icon icon-plus"></span></li>
                  </ul>
                  <div class="createlistlink" style="display: none;"><button class="btn-small btn-primary" id="createlistlink">Créer une liste</button></div>
                  <form class="createlistform" action="/wishlist/create-wishlist " method="post" style="display: block;">
                   <input class="form-control" type="text" placeholder="Saisissez le nom de votre nouvelle liste" name="listname" maxlength="30">
                        <button class="btn-small btn-primary disabled" id="addlistsubmit">Sauvegarder cette liste</button>
                  </form>
                  <div class="listsfull" data-managelists="<a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-addhistorybtn="Tout ajouter à cette liste" data-maxmessaage="<span class='icon-alert'></span>&nbsp;Maximum de listes atteint<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-exists="<span class='icon-alert'></span>&nbsp;Cette liste existe déjà. Choisissez un autre nom ou modifiez la liste existante.<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" style="display: none;"></div>
                </div>
         	</div>
<div class="pricewrapper">
												<div class="originalprice">
								 					<ycommerce:testid code="product_productPrice">
														</ycommerce:testid>
												</div>
												<div class="price" id="price">
													<span class="bigprice">$entity1.bigprice</span><span class="homecarcentscomma">,</span><span class="cents">$entity1.smallprice</span><span class="sign">€</span><span class="type">/pièce</span>
												</div>
											</div>
										</div>
										</div>
									
<div class="spinner initspindisplay" id="spinner-$entity1.id" data-min="1" data-max="99" data-step="1" data-type="no-bulk" data-soldout="false" data-unitdescription="ST" style="display: block;">
	<div class="addtocart">
		<button class="btn_add_to_cart" id="addtocartsingle"><span class="icon icon-cart-outlined2018"></span>
		
		
			Ajouter
		
		</button>
	</div>
	<div class="quickaddtocart" errormax="<span class='icon-alert'></span>Quantité maximale atteinte :" errorinvalid="<span class='icon-alert'></span>Vérifiez la quantité saisie." errormin="<span class='icon-alert'></span>Saisissez une valeur supérieure au minimum." errorquantityupdate="<span class='icon-alert'></span>Le montant a été adapté (" style="display: none;">
		<div class="poidscntr">
			
		</div>
		<div class="plusmincntr">
			<form method="post" action="/fr/cart/add" id="addToCartForm$entity1.id">
			    <div class="buttonleft"><span class="icon-min"></span></div>		    		    
			    <div class="buttonright "><span class="icon-plus"></span></div>			
				<span><input class="amountinput" type="text" value="0"><span class="unit">product.unit.plural.</span></span>
			    <input type="hidden" name="productCodePost" class="productCodePost" value="$entity1.id">
			</form>
		</div>
	</div>
	<div class="tempsoldout" style="display: none;">
		Indisponible
	</div>

	<input type="hidden" name="notification-details" class="notification-details" data-name="$entity1.name_fr" data-src="$entity1.thumbnailUrl">
	<input type="hidden" name="STsingle" class="STsingle" value="pièce">
	<input type="hidden" name="STplural" class="STplural" value="pièces">
	<input type="hidden" name="GRsingle" class="GRsingle" value="gramme">
	<input type="hidden" name="GRplural" class="GRplural" value="grammes">
	<input type="hidden" name="I00single" class="I00single" value="paquet">
	<input type="hidden" name="I00plural" class="I00plural" value="paquets">
	<input type="hidden" name="C00single" class="C00single" value="paquet">
	<input type="hidden" name="C00plural" class="C00plural" value="paquets">
</div><script type="text/javascript">
			var counti='';
			if(null!=document.getElementById('productName'+counti)){
				var stockAvailable=document.getElementById('stockAvailable'+counti).value;
				if(''!=productName){
					productArray.push({
			        	'id': '$entity1.id',
			          	 'name': "$entity1.name_fr,
			          	'category':'',
			          	 'stockAvailable': 1
						        });
				}
			}
			</script>
								</div>
							</div></div><div class="owl-item" style="width: 272px;"><div data-tms-productid="$entity2.id" class="new carousel__item product-item productid-$entity2.id" data-productid="$entity2.id" id="productid-$entity2.id">
							                    <div class="flag new">
                    NOUVEAU</div>
                <div class="wrapper ">
									<div class="thumb">
								        <div class="icons">
							                </div>
										<a href="$entity2.pageURL_fr" title="$entity2.name_fr">
											<img src="$entity2.thumbnailURL" alt="$entity2.name_fr" title="$entity2.name_fr">
			</a>
										</div>
									<div class="details">
										<a class="name" href="$entity2.pageURL_fr">$entity2.name_fr</a>
										<div class="priceinfo">
											<input type="hidden" class="productcode" value="$entity1.id">
			 <div class="addtolist usecolorbox" errorlogin="<span class='icon-alert'></span><a href='/fr/login' class='listlogin'>Connectez-vous ici</a>&nbsp;Pour accéder à vos listes et à vos produits fréquemment achetés.">			 
			 <span class="lists-toadd-outlined"></span><!-- <span class='icon icon-plus-circle' id='addToList-plus-icon'></span> -->
			 <div class="closearea" style="display:none"></div>
              <div class="addtolistexpanded">
                 <p class="title" id="whltitle">Ajouter à une liste</p>
                 <p id="firstlistever">Créer une première liste</p>
                  <ul id="mylists" class="mylists">
                  <li>Mainly drinks<span class="icon icon-plus"></span></li>
                  <li>test 2<span class="icon icon-plus"></span></li>
                  <li>Test 1<span class="icon icon-plus"></span></li>
                  <li>Birra Preferisco<span class="icon icon-plus"></span></li>
                  </ul>
                  <div class="createlistlink" style="display: none;"><button class="btn-small btn-primary" id="createlistlink">Créer une liste</button></div>
                  <form class="createlistform" action="/wishlist/create-wishlist " method="post" style="display: block;">
                   <input class="form-control" type="text" placeholder="Saisissez le nom de votre nouvelle liste" name="listname" maxlength="30">
                        <button class="btn-small btn-primary disabled" id="addlistsubmit">Sauvegarder cette liste</button>
                  </form>
                  <div class="listsfull" data-managelists="<a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-addhistorybtn="Tout ajouter à cette liste" data-maxmessaage="<span class='icon-alert'></span>&nbsp;Maximum de listes atteint<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-exists="<span class='icon-alert'></span>&nbsp;Cette liste existe déjà. Choisissez un autre nom ou modifiez la liste existante.<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" style="display: none;"></div>
                </div>
         	</div>
<div class="pricewrapper">
												<div class="originalprice">
								 					<ycommerce:testid code="product_productPrice">
														</ycommerce:testid>
												</div>
												<div class="price" id="price">
													<span class="bigprice">$entity2.bigprice</span><span class="homecarcentscomma">,</span><span class="cents">$entity2.smallprice</span><span class="sign">€</span><span class="type">/pièce</span>
												</div>

											</div>

										</div>
										</div>

<div class="spinner initspindisplay" id="spinner-$entity2.id" data-min="1" data-max="99" data-step="1" data-type="no-bulk" data-soldout="false" data-unitdescription="ST" style="display: block;">
	<div class="addtocart">
		<button class="btn_add_to_cart" id="addtocartsingle"><span class="icon icon-cart-outlined2018"></span>
		
		
			Ajouter
		
		</button>
	</div>
	<div class="quickaddtocart" errormax="<span class='icon-alert'></span>Quantité maximale atteinte :" errorinvalid="<span class='icon-alert'></span>Vérifiez la quantité saisie." errormin="<span class='icon-alert'></span>Saisissez une valeur supérieure au minimum." errorquantityupdate="<span class='icon-alert'></span>Le montant a été adapté (" style="display: none;">
		<div class="poidscntr">
			
		</div>
		<div class="plusmincntr">
			<form method="post" action="/fr/cart/add" id="addToCartForm$entity2.id">
			    <div class="buttonleft"><span class="icon-min"></span></div>
			    
			    
			    <div class="buttonright "><span class="icon-plus"></span></div>
			    
				
				<span><input class="amountinput" type="text" value="0"><span class="unit">product.unit.plural.</span></span>
			    <input type="hidden" name="productCodePost" class="productCodePost" value="$entity2.id">
			</form>
		</div>
	</div>
	<div class="tempsoldout" style="display: none;">
		Indisponible
	</div>
	<input type="hidden" name="notification-details" class="notification-details" data-name="$entity2.name_fr" data-src="$entity2.thumbnailURL">
	<input type="hidden" name="STsingle" class="STsingle" value="pièce">
	<input type="hidden" name="STplural" class="STplural" value="pièces">

	<input type="hidden" name="GRsingle" class="GRsingle" value="gramme">
	<input type="hidden" name="GRplural" class="GRplural" value="grammes">

	<input type="hidden" name="I00single" class="I00single" value="paquet">
	<input type="hidden" name="I00plural" class="I00plural" value="paquets">

	<input type="hidden" name="C00single" class="C00single" value="paquet">
	<input type="hidden" name="C00plural" class="C00plural" value="paquets">
</div><script type="text/javascript">
			var counti='';
			if(null!=document.getElementById('productName'+counti)){
				var stockAvailable=document.getElementById('stockAvailable'+counti).value;
				if(''!=productName){
					productArray.push({
			        	'id': '$entity2.id',
			          	 'name': "$entity2.name_fr",
			          	'category':'',
			          	 'stockAvailable': 1
						        });
				}
			}
			</script>
								</div>
							</div></div><div class="owl-item" style="width: 272px;"><div data-tms-productid="$entity3.id" class="new carousel__item product-item productid-$entity3.id" data-productid="$entity3.id" id="productid-$entity3.id">
							                    <div class="flag new">
                    NOUVEAU</div>
                <div class="wrapper ">
									<div class="thumb">
								        <div class="icons">
							                </div>
										<a href="$entity3.pageURL_fr" title="$entity3.name_fr">
											<img src="$entity3.thumbnailURL" alt="$entity3.name_fr" title="$entity3.name_fr">
			</a>
										</div>
									<div class="details">
										<a class="name" href="$entity3.pageURL_fr">$entity3.name_FR</a>
										<div class="priceinfo">
											<input type="hidden" class="productcode" value="$entity3.id">
			 <div class="addtolist usecolorbox" errorlogin="<span class='icon-alert'></span><a href='/fr/login' class='listlogin'>Connectez-vous ici</a>&nbsp;Pour accéder à vos listes et à vos produits fréquemment achetés.">			 
			 <span class="lists-toadd-outlined"></span><!-- <span class='icon icon-plus-circle' id='addToList-plus-icon'></span> -->
			 <div class="closearea" style="display:none"></div>
              <div class="addtolistexpanded">
                 <p class="title" id="whltitle">Ajouter à une liste</p>
                 <p id="firstlistever">Créer une première liste</p>
                  <ul id="mylists" class="mylists">
                  <li>Mainly drinks<span class="icon icon-plus"></span></li>
                  <li>test 2<span class="icon icon-plus"></span></li>
                  <li>Test 1<span class="icon icon-plus"></span></li>
                  <li>Birra Preferisco<span class="icon icon-plus"></span></li>
                  </ul>
                  <div class="createlistlink" style="display: none;"><button class="btn-small btn-primary" id="createlistlink">Créer une liste</button></div>
                  <form class="createlistform" action="/wishlist/create-wishlist " method="post" style="display: block;">
                   <input class="form-control" type="text" placeholder="Saisissez le nom de votre nouvelle liste" name="listname" maxlength="30">
                        <button class="btn-small btn-primary disabled" id="addlistsubmit">Sauvegarder cette liste</button>
                  </form>
                  <div class="listsfull" data-managelists="<a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-addhistorybtn="Tout ajouter à cette liste" data-maxmessaage="<span class='icon-alert'></span>&nbsp;Maximum de listes atteint<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-exists="<span class='icon-alert'></span>&nbsp;Cette liste existe déjà. Choisissez un autre nom ou modifiez la liste existante.<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" style="display: none;"></div>
                </div>
         	</div>
<div class="pricewrapper">
												<div class="originalprice">
								 					<ycommerce:testid code="product_productPrice">
														</ycommerce:testid>
												</div>
												<div class="price" id="price">
													<span class="bigprice">$entity3.bigprice</span><span class="homecarcentscomma">,</span><span class="cents">$entity3.smallprice</span><span class="sign">€</span><span class="type">/pièce</span>
												</div>

											</div>

										</div>
										</div>						
<div class="spinner initspindisplay" id="spinner-$entity3.id" data-min="1" data-max="99" data-step="1" data-type="no-bulk" data-soldout="false" data-unitdescription="ST" style="display: block;">
	<div class="addtocart">
		<button class="btn_add_to_cart" id="addtocartsingle"><span class="icon icon-cart-outlined2018"></span>
		
		
			Ajouter
		
		</button>
	</div>
	<div class="quickaddtocart" errormax="<span class='icon-alert'></span>Quantité maximale atteinte :" errorinvalid="<span class='icon-alert'></span>Vérifiez la quantité saisie." errormin="<span class='icon-alert'></span>Saisissez une valeur supérieure au minimum." errorquantityupdate="<span class='icon-alert'></span>Le montant a été adapté (" style="display: none;">
		<div class="poidscntr">
			
		</div>
		<div class="plusmincntr">
			<form method="post" action="/fr/cart/add" id="addToCartForm$entity3.id">
			    <div class="buttonleft"><span class="icon-min"></span></div>
			    
			    
			    <div class="buttonright "><span class="icon-plus"></span></div>
			    
				
				<span><input class="amountinput" type="text" value="0"><span class="unit">product.unit.plural.</span></span>
			    <input type="hidden" name="productCodePost" class="productCodePost" value="$entity3.id">
			</form>
		</div>
	</div>
	<div class="tempsoldout" style="display: none;">
		Indisponible
	</div>

	<input type="hidden" name="notification-details" class="notification-details" data-name="$entity3.name_fr" data-src="$entity3.thumbnailURL">
	<input type="hidden" name="STsingle" class="STsingle" value="pièce">
	<input type="hidden" name="STplural" class="STplural" value="pièces">
	<input type="hidden" name="GRsingle" class="GRsingle" value="gramme">
	<input type="hidden" name="GRplural" class="GRplural" value="grammes">
	<input type="hidden" name="I00single" class="I00single" value="paquet">
	<input type="hidden" name="I00plural" class="I00plural" value="paquets">
	<input type="hidden" name="C00single" class="C00single" value="paquet">
	<input type="hidden" name="C00plural" class="C00plural" value="paquets">
</div><script type="text/javascript">
			var counti='';
			if(null!=document.getElementById('productName'+counti)){
				var stockAvailable=document.getElementById('stockAvailable'+counti).value;
				if(''!=productName){
					productArray.push({
			        	'id': '$entity3.id',
			          	 'name': "$entity3.name_fr,
			          	'category':'',
			          	 'stockAvailable': 1
						        });
				}
			}
			</script>
								</div>
							</div></div><div class="owl-item" style="width: 272px;"><div data-tms-productid="$entity4.id" class="reduction carousel__item product-item productid-$entity4.id" data-productid="$entity4.id" id="productid-$entity4.id">
							                    <div class="flag reduction">
                    -50% pour 2 unités</div>
                    <div class="wrapper ">
									<div class="thumb">
								        <div class="icons">
							                </div>
										<a href="$entity4.pageURL_fr" title="$entity4.name_fr">
											<img src="$entity4.thumbnailURL" alt="$entity4.name_fr" title="$entity4.name_fr">
			</a>
										</div>
									<div class="details">
										<a class="name" href="$entity4.pageURL_fr">$entity4.name_fr</a>
										<div class="priceinfo">
											<input type="hidden" class="productcode" value="$entity4.id">
			 <div class="addtolist usecolorbox" errorlogin="<span class='icon-alert'></span><a href='/fr/login' class='listlogin'>Connectez-vous ici</a>&nbsp;Pour accéder à vos listes et à vos produits fréquemment achetés.">			 
			 <span class="lists-toadd-outlined"></span><!-- <span class='icon icon-plus-circle' id='addToList-plus-icon'></span> -->
			 <div class="closearea" style="display:none"></div>
              <div class="addtolistexpanded">
                 <p class="title" id="whltitle">Ajouter à une liste</p>
                 <p id="firstlistever">Créer une première liste</p>
                  <ul id="mylists" class="mylists">
                  <li>Mainly drinks<span class="icon icon-plus"></span></li>
                  <li>test 2<span class="icon icon-plus"></span></li>
                  <li>Test 1<span class="icon icon-plus"></span></li>
                  <li>Birra Preferisco<span class="icon icon-plus"></span></li>
                  </ul>
                  <div class="createlistlink" style="display: none;"><button class="btn-small btn-primary" id="createlistlink">Créer une liste</button></div>
                  <form class="createlistform" action="/wishlist/create-wishlist " method="post" style="display: block;">
                   <input class="form-control" type="text" placeholder="Saisissez le nom de votre nouvelle liste" name="listname" maxlength="30">
                        <button class="btn-small btn-primary disabled" id="addlistsubmit">Sauvegarder cette liste</button>
                  </form>
                  <div class="listsfull" data-managelists="<a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-addhistorybtn="Tout ajouter à cette liste" data-maxmessaage="<span class='icon-alert'></span>&nbsp;Maximum de listes atteint<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-exists="<span class='icon-alert'></span>&nbsp;Cette liste existe déjà. Choisissez un autre nom ou modifiez la liste existante.<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" style="display: none;"></div>
                </div>
         	</div>
<div class="pricewrapper">
												<div class="originalprice">
								 					<ycommerce:testid code="product_productPrice">
														</ycommerce:testid>
												</div>
												<div class="price" id="price">
													<span class="bigprice">$entity4.bigprice</span><span class="homecarcentscomma">,</span><span class="cents">$entity4.smallprice</span><span class="sign">€</span><span class="type">/pièce</span>
												</div>

											</div>

										</div>
										</div>
									
<div class="spinner initspindisplay" id="spinner-$entity4.id" data-min="1" data-max="99" data-step="1" data-type="no-bulk" data-soldout="false" data-unitdescription="ST" style="display: block;">
	<div class="addtocart">
		<button class="btn_add_to_cart" id="addtocartsingle"><span class="icon icon-cart-outlined2018"></span>
		
		
			Ajouter
		
		</button>
	</div>
	<div class="quickaddtocart" errormax="<span class='icon-alert'></span>Quantité maximale atteinte :" errorinvalid="<span class='icon-alert'></span>Vérifiez la quantité saisie." errormin="<span class='icon-alert'></span>Saisissez une valeur supérieure au minimum." errorquantityupdate="<span class='icon-alert'></span>Le montant a été adapté (" style="display: none;">
		<div class="poidscntr">
			
		</div>
		<div class="plusmincntr">
			<form method="post" action="/fr/cart/add" id="addToCartForm$entity4.id">
			    <div class="buttonleft"><span class="icon-min"></span></div>		    
			    <div class="buttonright "><span class="icon-plus"></span></div>		
				<span><input class="amountinput" type="text" value="0"><span class="unit">product.unit.plural.</span></span>
			    <input type="hidden" name="productCodePost" class="productCodePost" value="$entity4.id">
			</form>
		</div>
	</div>
	<div class="tempsoldout" style="display: none;">
		Indisponible
	</div>

	<input type="hidden" name="notification-details" class="notification-details" data-name="$entity4.name_fr" data-src="$entity4.thumbnailURL">
	<input type="hidden" name="STsingle" class="STsingle" value="pièce">
	<input type="hidden" name="STplural" class="STplural" value="pièces">
	<input type="hidden" name="GRsingle" class="GRsingle" value="gramme">
	<input type="hidden" name="GRplural" class="GRplural" value="grammes">
	<input type="hidden" name="I00single" class="I00single" value="paquet">
	<input type="hidden" name="I00plural" class="I00plural" value="paquets">
	<input type="hidden" name="C00single" class="C00single" value="paquet">
	<input type="hidden" name="C00plural" class="C00plural" value="paquets">
</div><script type="text/javascript">
			var counti='';
			if(null!=document.getElementById('productName'+counti)){
				var stockAvailable=document.getElementById('stockAvailable'+counti).value;
				if(''!=productName){
					productArray.push({
			        	'id': '$entity4.id',
			          	 'name': "$entity4.name_fr",
			          	'category':'',
			          	 'stockAvailable': 1
						        });
				}
			}
			</script>
								</div>
							</div></div><div class="owl-item" style="width: 272px;"><div data-tms-productid="$entity5.id" class="reduction carousel__item product-item productid-$entity5.id" data-productid="$entity5.id" id="productid-$entity5.id">
							                    <div class="flag reduction">
                    -33,34% pour 3 unités</div>
                    <div class="wrapper ">
									<div class="thumb">
								        <div class="icons">
							                </div>
										<a href="$entity5.pageURL_fr" title="$entity5.name_fr">
											<img src="$entity5.thumbnailURL" alt="$entity5.name_fr" title="$entity5.name_fr">
			</a>
										</div>
									<div class="details">
										<a class="name" href="$entity5.pageURL_fr">$entity5.name_fr</a>
										<div class="priceinfo">
											<input type="hidden" class="productcode" value="$entity5.id">
			 <div class="addtolist usecolorbox" errorlogin="<span class='icon-alert'></span><a href='/fr/login' class='listlogin'>Connectez-vous ici</a>&nbsp;Pour accéder à vos listes et à vos produits fréquemment achetés.">			 
			 <span class="lists-toadd-outlined"></span><!-- <span class='icon icon-plus-circle' id='addToList-plus-icon'></span> -->
			 <div class="closearea" style="display:none"></div>
              <div class="addtolistexpanded">
                 <p class="title" id="whltitle">Ajouter à une liste</p>
                 <p id="firstlistever">Créer une première liste</p>
                  <ul id="mylists" class="mylists">
                  <li>Mainly drinks<span class="icon icon-plus"></span></li>
                  <li>test 2<span class="icon icon-plus"></span></li>
                  <li>Test 1<span class="icon icon-plus"></span></li>
                  <li>Birra Preferisco<span class="icon icon-plus"></span></li>
                  </ul>
                  <div class="createlistlink" style="display: none;"><button class="btn-small btn-primary" id="createlistlink">Créer une liste</button></div>
                  <form class="createlistform" action="/wishlist/create-wishlist " method="post" style="display: block;">
                   <input class="form-control" type="text" placeholder="Saisissez le nom de votre nouvelle liste" name="listname" maxlength="30">
                        <button class="btn-small btn-primary disabled" id="addlistsubmit">Sauvegarder cette liste</button>
                  </form>
                  <div class="listsfull" data-managelists="<a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-addhistorybtn="Tout ajouter à cette liste" data-maxmessaage="<span class='icon-alert'></span>&nbsp;Maximum de listes atteint<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" data-exists="<span class='icon-alert'></span>&nbsp;Cette liste existe déjà. Choisissez un autre nom ou modifiez la liste existante.<br/><a href='/fr/my-account/my-lists'>Gérer vos listes</a>" style="display: none;"></div>
                </div>
         	</div>
<div class="pricewrapper">
												<div class="originalprice">
								 					<ycommerce:testid code="product_productPrice">
														</ycommerce:testid>
												</div>
												<div class="price" id="price">
													<span class="bigprice">$entity5.bigprice</span><span class="homecarcentscomma">,</span><span class="cents">$entity5.smallprice</span><span class="sign">€</span><span class="type">/pièce</span>
												</div>

											</div>

										</div>
										</div>
									
<div class="spinner initspindisplay" id="spinner-$entity5.id" data-min="1" data-max="99" data-step="1" data-type="no-bulk" data-soldout="false" data-unitdescription="ST" style="display: block;">
	<div class="addtocart">
		<button class="btn_add_to_cart" id="addtocartsingle"><span class="icon icon-cart-outlined2018"></span>
		
		
			Ajouter
		
		</button>
	</div>
	<div class="quickaddtocart" errormax="<span class='icon-alert'></span>Quantité maximale atteinte :" errorinvalid="<span class='icon-alert'></span>Vérifiez la quantité saisie." errormin="<span class='icon-alert'></span>Saisissez une valeur supérieure au minimum." errorquantityupdate="<span class='icon-alert'></span>Le montant a été adapté (" style="display: none;">
		<div class="poidscntr">
			
		</div>
		<div class="plusmincntr">
			<form method="post" action="/fr/cart/add" id="addToCartForm$entity5.id">
			    <div class="buttonleft"><span class="icon-min"></span></div>
			    
			    
			    <div class="buttonright "><span class="icon-plus"></span></div>
			    
				
				<span><input class="amountinput" type="text" value="0"><span class="unit">product.unit.plural.</span></span>
			    <input type="hidden" name="productCodePost" class="productCodePost" value="$entity5.id">
			</form>
		</div>
	</div>
	<div class="tempsoldout" style="display: none;">
		Indisponible
	</div>
	<input type="hidden" name="notification-details" class="notification-details" data-name="$entity5.name_fr" data-src="$entity5.thumbnailURL">
	<input type="hidden" name="STsingle" class="STsingle" value="pièce">
	<input type="hidden" name="STplural" class="STplural" value="pièces">
	<input type="hidden" name="GRsingle" class="GRsingle" value="gramme">
	<input type="hidden" name="GRplural" class="GRplural" value="grammes">
	<input type="hidden" name="I00single" class="I00single" value="paquet">
	<input type="hidden" name="I00plural" class="I00plural" value="paquets">
	<input type="hidden" name="C00single" class="C00single" value="paquet">
	<input type="hidden" name="C00plural" class="C00plural" value="paquets">
</div><script type="text/javascript">
			var counti='';
			if(null!=document.getElementById('productName'+counti)){
				var stockAvailable=document.getElementById('stockAvailable'+counti).value;
				if(''!=productName){
					productArray.push({
			        	'id': '$entity5.id',
			          	 'name': "$entity5.name_fr",
			          	'category':'',
			          	 'stockAvailable': 1
						        });
				}
			}
			</script>
								</div>
							</div></div></div></div>
						<div class="owl-controls clickable" style="display: none;"><div class="owl-buttons"><div class="owl-prev"><span class="icon-arrow-left"></span></div><div class="owl-next"><span class="icon-arrow-right"></span></div></div></div></div>
				</div>