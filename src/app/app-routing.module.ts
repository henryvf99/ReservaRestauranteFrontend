import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingPeopleComponent} from "./pages/booking-people/booking-people.component";
import {PrincipalComponent} from "./pages/principal/principal.component";
import {BookingPeopleEventComponent} from "./pages/booking-people-event/booking-people-event.component";
import {BookingPeopleDataComponent} from "./pages/booking-people-data/booking-people-data.component";
import {BookingPeopleFinishedComponent} from "./pages/booking-people-finished/booking-people-finished.component";
import {BookingPeopleDateComponent} from "./pages/booking-people-date/booking-people-date.component";
import {SearchBookingComponent} from "./pages/search-booking/search-booking.component";
import {BookingPeoplePaymentComponent} from "./pages/booking-people-payment/booking-people-payment.component";
import {SearchBookingQueryComponent} from "./pages/search-booking-query/search-booking-query.component";
import {UsComponent} from "./pages/us/us.component";
import {LocationComponent} from "./pages/location/location.component";
import {LoginComponent} from "./pages/login/login.component";
import {BookingDateHourComponent} from "./pages/booking-date-hour/booking-date-hour.component";
import {AdminBookingComponent} from "./pages/admin-booking/admin-booking.component";
import {EditBookingComponent} from "./pages/edit-booking/edit-booking.component";
import {AddBookingComponent} from "./pages/add-booking/add-booking.component";
import {WatchBookingComponent} from "./pages/watch-booking/watch-booking.component";
import {BookingPeopleFoodSnacksComponent} from "./pages/booking-people-food-snacks/booking-people-food-snacks.component";
import {BookingPeopleFoodJuicesComponent} from "./pages/booking-people-food-juices/booking-people-food-juices.component";
import { BookingPeopleFoodDishesComponent } from './pages/booking-people-food-dishes/booking-people-food-dishes.component';
import { BookingPeopleFoodDessertsComponent } from './pages/booking-people-food-desserts/booking-people-food-desserts.component';
import { BookingPeopleFoodSodasComponent } from './pages/booking-people-food-sodas/booking-people-food-sodas.component';
import { BookingPeopleFoodSoupsComponent } from './pages/booking-people-food-soups/booking-people-food-soups.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'Principal', component: PrincipalComponent},
  { path: 'bookingPeople', component: BookingPeopleComponent},
  { path: 'bookingPeopleEvent', component: BookingPeopleEventComponent},
  { path: 'bookingPeopleData', component: BookingPeopleDataComponent},
  { path: 'bookingPeopleFinished', component: BookingPeopleFinishedComponent},
  { path: 'bookingPeopleDate', component: BookingPeopleDateComponent},
  { path: 'bookingPeoplePayment', component: BookingPeoplePaymentComponent},
  { path: 'searchBooking', component: SearchBookingComponent},
  { path: 'searchBookingQuery', component: SearchBookingQueryComponent},
  { path: 'Us', component: UsComponent},
  { path: 'Location', component: LocationComponent},
  { path: 'bookingDateHour', component: BookingDateHourComponent},
  { path: 'adminBooking', component: AdminBookingComponent},
  { path: 'editBooking', component: EditBookingComponent},
  { path: 'addBooking', component: AddBookingComponent},
  { path: 'watchBooking', component: WatchBookingComponent},
  { path: 'bookingPeopleFoodSnacks', component: BookingPeopleFoodSnacksComponent},
  { path: 'bookingPeopleFoodJuices', component: BookingPeopleFoodJuicesComponent},
  { path: 'bookingPeopleFoodDishes', component: BookingPeopleFoodDishesComponent},
  { path: 'bookingPeopleFoodDesserts', component: BookingPeopleFoodDessertsComponent},
  { path: 'bookingPeopleFoodSodas', component: BookingPeopleFoodSodasComponent},
  { path: 'bookingPeopleFoodSoups', component: BookingPeopleFoodSoupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
